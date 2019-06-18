import itertools

# The list of candies to print to the screen
candyList = ["Snickers", "Kit Kat", "Sour Patch Kids", "Juicy Fruit", "Swedish Fish",
             "Skittles", "Hershey Bar", "Starbursts", "M&Ms"]

# The amount of candy the user will be allowed to choose
allowance = 5

# The list used to store all of the candies selected inside of
candyCart = []


# Print out options
for x in range(len(candyList)):
    print("["+str(x)+"]" + candyList[x])


for i in range(allowance):
    uInput = int(input("Number? "))
    if uInput == 0:
       candyCart.append(candyList[0])
    elif uInput == 1:
        candyCart.append(candyList[1])
    elif uInput == 2:
        candyCart.append(candyList[2])
    elif uInput == 3:
        candyCart.append(candyList[3])
    elif uInput == 4:
        candyCart.append(candyList[4])
    elif uInput == 5:
        candyCart.append(candyList[5])
    elif uInput == 6:
        candyCart.append(candyList[6])
    elif uInput == 7:
        candyCart.append(candyList[7])
    elif uInput == 8:
        candyCart.append(candyList[8])

        
print(candyCart)
    
for candies in candyCart:
    print(candies)