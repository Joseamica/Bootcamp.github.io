# Incorporate the random library
import random

# Print Title
print("Let's Play Rock Paper Scissors!")

# Specify the three options
options = ["r", "p", "s"]
options_full = ["Rock", "Paper", "Scissors"]


# Computer Selection
computer_choice = random.choice(options)


if computer_choice == "r":
    computer_choice = "Rock"
elif computer_choice == "s":
    computer_choice = "Scissors"
elif computer_choice == "p":
    computer_choice = "Paper"

# User Selection
user_choice = input("Make your Choice: (r)ock, (p)aper, (s)cissors? ")

if user_choice == "r":
    user_choice = "Rock"
elif user_choice == "s":
    user_choice = "Scissors"
elif user_choice == "p":
    user_choice = "Paper"


# Run Conditionals
if (user_choice == options_full[0] and computer_choice == options_full[2]) or (user_choice == options_full[1] and computer_choice == options_full[0]) or (user_choice == options_full[2] and computer_choice == options_full[1]):
    print(f"\nYou choose {user_choice} and your enemy choose {computer_choice}, You won!")

elif user_choice == options_full[0] and computer_choice == options_full[0]:
    print(f"\nYou choose {user_choice} and your enemy choose {computer_choice}, Its a tie.")
elif user_choice == options_full[1] and computer_choice == options_full[1]:
    print(f"\nYou choose {user_choice} and your enemy choose {computer_choice}, Its a tie.")
elif user_choice == options_full[2] and computer_choice == options_full[2]:
    print(f"\nYou choose {user_choice} and your enemy choose {computer_choice}, Its a tie.")
else:  
    print(f"\nYou choose {user_choice} and your enemy choose {computer_choice}, You lose!")