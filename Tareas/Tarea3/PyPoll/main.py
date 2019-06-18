import pandas as pd
import statistics 
import numpy as np
df = pd.read_csv("./pypol.csv")

#Crea y abre un archivo results.txt
f = open('results.txt','w+')


#Numero total de votos
numVotes = df['Voter ID'].count()
#Definimos variables de cada candidato
khan = 0
correy = 0
tooley = 0
li = 0
winner = ""

#Loop en la columna candidates, si i es "khan" almacenamos el voto en la variable khan
for i in df['Candidate']:
    if i == "Khan":
        khan += 1
    elif i == "Correy":
        correy +=1
    elif i == "Li":
        li += 1
    elif i == "O\'Tooley":
        tooley += 1

#Definimos las variables para sacar los porcentajes de votos
percentageKhan = (khan * 100) / numVotes
percentageCorrey = (correy * 100) / numVotes
percentageLi = (li * 100) / numVotes
percentageTooley = (tooley * 100) / numVotes

#Hacemos statements para saber quien gano
if percentageKhan > percentageCorrey and percentageKhan > percentageLi and percentageKhan > percentageTooley:
        winner = "Khan"
elif percentageCorrey > percentageKhan and percentageCorrey > percentageLi and percentageCorrey > percentageTooley:
        winner = "Correy"
elif percentageLi > percentageKhan and percentageLi > percentageCorrey and percentageLi > percentageTooley:
        winner = "Li"
elif percentageTooley > percentageKhan and percentageTooley > percentageCorrey and percentageTooley > percentageLi:
        winner = "O\'Tooley"

#Imprimimos en la terminal los resultados
print("\nElection Results\n----------------------------------")        
print(f"Total Votes {numVotes}")
print("----------------------------------")
print("Khan: {0:.3f}%".format(round(percentageKhan,2)) + " (" + str(khan) + ")")
print("Correy: {0:.3f}%".format(round(percentageCorrey,2)) + " (" + str(correy) + ")")
print("Li: {0:.3f}%".format(round(percentageLi,2)) + " (" + str(li) + ")")
print("O\'Tooley: {0:.3f}%".format(round(percentageTooley,2)) + " (" + str(tooley) + ")")
print("----------------------------------")     
print(f"Winner: {winner}") 
print("----------------------------------")

#Escribimos en el documento results.txt los resultados
f.write("\nElection Results\n----------------------------------\n")
f.write('Total Votes: ' + str(numVotes)+'\n')
f.write('Khan: ' + str.format("{0:.3f}", percentageKhan) + "% (" + str(khan) + ")\n")
f.write('Correy: ' + str.format("{0:.3f}",percentageCorrey) + "% (" + str(correy) + ")\n")
f.write('Li: ' + str.format("{0:.3f}",percentageLi) + "% (" + str(li) + ")\n")
f.write('O\'Tooley: ' + str.format("{0:.3f}",percentageTooley) + "% (" + str(tooley) + ")\n")
f.write('----------------------------------\n')
f.write('Winner: ' + winner + '\n')
f.write('----------------------------------\n')

#Cerramos documento
f.close()