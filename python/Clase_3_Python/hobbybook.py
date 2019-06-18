
myDict = {
        "name":"Jose Antonio",
        "age":25,
        "hobbies":["Coding","Gym","xbox"],
        "week":
            {
              'Monday': '6:00 am',
              'AllWeek': '7:00 am'
                    }
                }
print(f"Hi, I'm {myDict['name']}\nMy hobbies are {myDict['hobbies'][0]}, {myDict['hobbies'][1]} and {myDict['hobbies'][2]}\nMonday I wake up {myDict['week']['Monday']} and the rest of the week {myDict['week']['AllWeek']}")