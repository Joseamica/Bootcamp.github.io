name = input(str("Name? "))
neighbor = input(str("Neighbor name? "))

months_coding = input("How much time do " + name + " has been coding? ")
neighbor_months_coding = input("How much time do " + neighbor + " has been coding? ")

print(f"\nMy name is {name.title()} and I've been coding for {months_coding} months.\n\nMy neighbor name is {neighbor.title()} and has been coding for {neighbor_months_coding} months.")