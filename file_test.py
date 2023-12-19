import numpy as np

x = np.array(range(1,10))

for i in x:
    print("The number is:",i)

y = "*"
s = " "
h = int(input("De cuantas lineas quieres tu arbol?:"))
for i in range(1, h + 1):
    print(s* (h - i) + y * (2 * i - 1))