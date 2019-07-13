import sys
import string
d = dict.fromkeys(string.ascii_lowercase, 0)

#cuantos numeros hay en el alfabeto
number = []
#el alfabeto en una lista (a,b,c,d,e,f,g...)
alphabet = []

counter = 0
for i in d:
        counter += 1
        #agregara a la lista number cuantos numeros tiene la lista d (alfabeto)
        number.append(counter) 

for letters in d:
        alphabet.append(letters)


# print(number,len(number))
# print(alphabet,len(alphabet))


# for indext in "abcdefg":
#         #alphabet[index] = number[index]
#         print(indext)
#         if indext == number[i]:
#                 pass 
new_dict = {}
for i in range(26):
        new_dict[alphabet[i]]=number[i]
        #print(i)
        #print(letters[i])
#print(new_dict)

def check_dict(letter,new_dict):
        return new_dict[letter]

print(check_dict('p',new_dict))

  