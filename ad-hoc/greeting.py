greet = lambda name: f"Hello, {name}!"
people = ["Python", "Wekoslav", "DWX", "Nürnberg"]

greeted = map(greet, people)

for greeting in greeted:
    print(greeting)




