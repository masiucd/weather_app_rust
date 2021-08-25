fn main() {
    let t = std::env::var("WEATHER_API_KEY").expect("Oppps");
    dbg!("token {}", &t);
    println! {"token: {}", t};
}
