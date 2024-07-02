var greet = (string name) => $"Hello, {name}!";
List<string> people = ["C#", "Wekoslav", "DWX", "Nürnberg"];

var greeted = people.Select(greet);

foreach (var greeting in greeted)
{
    Console.WriteLine(greeting);
}



