import pandas as pd
import statistics 
import numpy as np

df = pd.read_csv("./pybank.csv")

f = open('results.txt','w+')

numMonths = df['Date'].count()
profit = df['Profit/Losses'].sum()
increaseProfit = df['Profit/Losses'].max()

profitLossesList = list(df['Profit/Losses'])
dateProfitLossesList = df['Date']

changeList = []
counter = 0

numDB = np.array(profitLossesList)
dateNp = np.array(dateProfitLossesList)
date = ""

for i in range(len(df)-1):
    curr = profitLossesList[i]
    currDown = profitLossesList[i+1]
    changeList.append(currDown-curr)
    counter = sum(df['Profit/Losses'])
    minChange = min(changeList)
    maxChange = max(changeList)  
    avgChance = round(np.mean(changeList),2)

maxChangeMonth = dateProfitLossesList[changeList.index(max(changeList))+1]
minChangeMonth = dateProfitLossesList[changeList.index(min(changeList))+1]


  

    


#Escribimos en el documento results.txt los resultados
f.write(f"Financial Analysis\n----------------------------------\n")
f.write(f"Your profit is: ${profit}\n")
f.write(f"Total Months {numMonths}\n")
f.write(f"Average  Change: ${avgChance}\n")
f.write(f"Greatest Increase in Profits: {maxChangeMonth} (${maxChange})\n")
f.write(f"Greatest Decrease in Profits: {minChangeMonth} (${minChange})\n")

print(f"\nFinancial Analysis\n----------------------------------\n")
print(f"Your profit is: ${profit}")
print(f"Total Months {numMonths}")
print(f"Average  Change: ${avgChance}")
print(f"Greatest Increase in Profits: {maxChangeMonth} (${maxChange})")
print(f"Greatest Decrease in Profits: {minChangeMonth} (${minChange})")



#Cerramos documento
f.close()