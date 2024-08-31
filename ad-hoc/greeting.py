greet = lambda name: f"Hello, {name}!"
people = ["Python", "Wekoslav", "Kulen Dayz", "Osijek"]

greeted = map(greet, people)

for greeting in greeted:
    print(greeting)




