def fibonacci(input,memory):
    if(input == 0 or input == 1):
        return memory[input]
    else:
        memory[input] = fibonacci(input - 1,memory) + fibonacci(input - 2,memory)
        return memory[input]

memory = [0] * 10
memory[0] = 0
memory[1] = 1
for i in range(10):
    print(fibonacci(i,memory))
