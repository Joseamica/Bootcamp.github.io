import csv

file = './netflix_ratings.csv'
f = open(file)
csv_f = csv.reader(f)

inputName = input("What tv show or movie do you want to search for? ")
rating = ""
user_rating = ""
a = False

for row in csv_f:
    if row[0] == inputName:    
        rating = row[1]
        user_rating = row[5]
        a = True


if a == True:                
    print(f"\n{inputName} is rated {rating} with a rating of {user_rating}")
else:
    print(f"\n{inputName} is not on our database! Ponte Buzo, Caperuso!")



print(f.read())