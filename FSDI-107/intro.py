def comment_division():
    print("=========================")

name = "seth"
last_name = "patterson"
cohort = 52
is_active = True

print(name + " " + last_name + " " + str(cohort))

integer = 10 #Integer
float_num = 3.14 #Float
text = "Hello" #String
is_sunny = False #Boolean

comment_division()

# ======== Type Conversion ======== 
num = 9.67
print(int(num)) # convrt a Float to an Integer

age = 25
print(str(age)) # convert an Integer to a String

price = "19.99" #convert a string to a float, output: 19.99
print(float(price))

#name = Peter
#last_name = Parker
#age = 30

print(f"Hello,  {name}  {last_name} , you are {str(age)} years old.") #Main Concatenation METHOD

comment_division()

#========= OPERATORS Section ===========
x = 5
y = 3

print(x + y) # addition
print(x - y) # subtraction
print(x * y) # multiplication
print(x / y) # division
print(x % y) # modulus
print(x**y)  # exponentiation

comment_division()

#========= Comparison OPERATORS Section ===========
a = 10
b = 5

print(a == b) #equal to
print(a != b) #NOT EQUAL to
print(a > b) #greater than
print(a < b) #less than
print(a >= b) #greater than or equal to
print(a <= b) #less than or equal to


comment_division()


x = 5
y = 10
print(".....")
print(x > 3 and y > 15) #TRUE, bc BOTH conditions are MET
print(x > 3 or y > 15) #TRUE, bc 1st 0R at least one condition is MET
print(not (x > 3)) #FALSE, bc X is > than 3 we are then applying "NOT" condition. stupid.
print(".....")


comment_division()

#====== Lists =======
fruits = ["apple","banana","cherry","watermelon"]
print(fruits[0])
print(fruits[-1])

comment_division()

#===== LIST METHODS =======
fruits.append("grape") #adds "grape" to the list
print(fruits)

fruits.remove("banana")       #removes "banana"

print(fruits.pop(1)) #removes and prints item at index 1 "cherry"

print(fruits.index("apple")) # returns index of "grape"
print(fruits.count("apple")) # returns HOW MANY Xs "apple" appears

fruits.append("apple")
print(fruits)

comment_division()

#========== if statements ==========

age = 20

if age >= 18:
    print("you are an adult")
else:
    print("you are a minor")


x = 10

if x > 10:
    print("x is greater than 10")
elif x == 10:
    print("x is equal to 10")
else:
    print("x is less than 10")

comment_division()

#=============== FOR LOOPS ==========

for i in range(5): #loop fron 0 to 4
    print(i)

fruits = ["apple","banana","cherry"] 

for fruit in fruits:   # FRUIT list
    print(fruit)
for x in fruits:   # FRUIT list
    print(f"fruit: {x}")

comment_division()

#========== Functions ===========
def greet():
    print("Hello from greet function")

greet() # calls the function

def say_hi(name): #parameter
    print("Hi, " + name)

say_hi("Seth")  #argument

comment_division()
