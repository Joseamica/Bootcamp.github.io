# Print Hello User!
print("Hello user!")

# Take in User Input
userName = input("What is your name? ")

# Respond Back with User Input
print(f"Hello {userName.title()}!")

# Take in the User Age
userAge = int(input("What is your age? "))

# Respond Back with a statement based on age
if userAge >= 18:
    print("Ah... A well traveled soul are ye.")
else:
    print("Awww... you're just a baby!")