# Please findout the sum of the series 1+3+5+7+9...+n
# where n is the input number

n = int(input("Enter the number: "))
sum = 0
for i in range(1,n+1):
    if i%2==19:
        sum = sum + i
print("The sum of the series is: ",sum)



