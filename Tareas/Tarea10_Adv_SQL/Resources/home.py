from flask import Flask, jsonify

app = Flask(__name__)
​
@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/precipitation<br/>"
        f"/api/v1.0/stations<br/>"
        f"/api/v1.0/tobs<br/>"
        f"/api/v1.0/<start><br/>"
        f"/api/v1.0/<start>/<end>"
    )
​
@app.route("/api/v1.0/precipitation")
def precipitation():
    # Create our session (link) from Python to the DB
    session = Session(engine)
​
    """Return a list of all measurments"""
    # Query all passengers
    results = session.query(Measurement.date, Measurement.prcp).all()
​
    session.close()
​
    # Create a dictionary from the row data and append to a list of all_measurments
    all_measurements = []
    for date, prcp in results:
        measurement_dict = {}
        measurement_dict["date"] = date
        measurement_dict["percipitation"] = prcp
        all_measurements.append(measurement_dict)
​
    return jsonify(all_measurements)
​
@app.route("/api/v1.0/stations")
def stations():
    # Create our session (link) from Python to the DB
    session = Session(engine)
​
    """Return a list of all stations names"""
    # Query all passengers
    results = session.query(Measurement.station).all()
​
    session.close()
    
    #return statement
    
    all_stations = []
    for station in results:
        single_station = station
        all_stations.append(station)
        
    return jsonify(all_stations)
​
​
@app.route("/api/v1.0/tobs")
def tobs():
    # Create our session (link) from Python to the DB
    session = Session(engine)
​
    # Latest Date
    lastDate = session.query(Measurement.date).order_by(Measurement.date.desc()).first()
    lastDate = str(lastDate)
    lastDate = lastDate[2:]
    lastDate = lastDate[:-3]
​
    lastDate = dt.datetime.strptime(lastDate, '%Y-%m-%d')
    oneYearAgo = lastDate - dt.timedelta(days=365)
    
    lastYear = session.query(Measurement.date, Measurement.tobs).filter(Measurement.date >= oneYearAgo).all()
​
    session.close()
    
    year_temps = []
    for date, temp in lastYear:
        temp_dict = {}
        temp_dict["date"] = date
        temp_dict["temperature"] = temp
        year_temps.append(temp_dict)
        
    return jsonify(year_temps)
​
@app.route("/api/v1.0/<start>")
def dateinfo(start):
    
    # Create our session (link) from Python to the DB
    session = Session(engine)
    
    # Start Date
    lastDate = session.query(Measurement.date).order_by(Measurement.date.desc()).first()
    lastDate = str(lastDate)
    lastDate = lastDate[2:]
    lastDate = lastDate[:-3]
    
    result = calc_temps_with_session(start, lastDate, session)
    
    return jsonify(result)
​
@app.route("/api/v1.0/<start>/<end>")
def datestartend(start, end):
    
    # Create our session (link) from Python to the DB
    session = Session(engine)
​
    result = calc_temps_with_session(start, end, session)
    
    return jsonify(result)
    
if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)