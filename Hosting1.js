{
    test();
    // Temporal dead zone started
    const test = () => console.log(test1);
    // TDZ ends before initialization
    let test1 = 10;
}