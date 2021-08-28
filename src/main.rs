fn main() {
    let api_token = std::env::var("WEATHER_API_KEY").expect("Oppps");
    let mut arg_iter = std::env::args();
    arg_iter.next();
    let args: String = arg_iter.collect();

    let client = reqwest::blocking::Client::new();
    let response = client
        .get("https://api.waqi.info/search/")
        .query(&[("token", api_token), ("keyword", args)])
        .header(reqwest::header::USER_AGENT, "masius weather app")
        .send()
        .expect("Successfully JSON request")
        .json::<serde_json::Value>()
        .expect("expected the body to be json");

    // println!("{}", response)
    dbg!(response);
}
