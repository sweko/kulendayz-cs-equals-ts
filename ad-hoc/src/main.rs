fn main() {
    let people = vec!["Rust", "Wekoslav", "DWX", "Nürnberg"];
    
    let greet = |name: &str| -> String { format!("Hello, {}!", name) };
    
    let greeted: Vec<String> = people.iter().map(|&name| greet(name)).collect();
    
    for greeting in greeted {
        println!("{}", greeting);
    }
}

