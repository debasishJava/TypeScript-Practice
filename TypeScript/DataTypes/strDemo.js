var userName = prompt("Enter Name");
if (userName == null) {
    document.write("you canceled..");
}
else if (userName == "") {
    document.write("Name cannot be emepty");
}
else {
    document.write("Hello! " + userName);
}
