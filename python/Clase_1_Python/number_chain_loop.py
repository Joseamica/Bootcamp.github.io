while True:
    try:
        numbers = int(input("How many numbers? "))
        break
    except ValueError:
        print("Tienes que seleccionar un numero. Vuelve a intentarlo")

i = 0
answer = ""
while i <= numbers:
    print(i)
    i += 1
    if i == numbers:
        answer = input("Would you want to continue? y=yes or n=no: ")
        if answer == "y":
            i = 0
            continue
        elif answer == "n":
            break

    
