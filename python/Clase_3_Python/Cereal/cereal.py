import pandas as pd


df = pd.read_csv("./cereal.csv")
df2 = pd.read_csv("./cereal_bonus.csv", sep=",", names=["Names", "mfr", "type","calores","protein","fat","sodium","fiber","carbo","sugars","potass","vitamins","shelf","weight","cups","rating"])

# sprint(df)


for i in df['fiber']:
    if i >= 5:
        print(df.iloc[[i]])


