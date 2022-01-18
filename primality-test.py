def test(array):
    for i in range(len(array)):
        if isprime(i) > 2:
            array[i] = "Composite"
        else:
            array[i] = "Prime"

def isprime(input):
    counter = 0
    for i in range(1,input+1):
        if((input%i == 0)):
            counter = counter + 1
    return counter

arr = [None] * 10
test(arr)
for i in range(1,len(arr)):
    print(i, arr[i])
