function delay(ms) {
    const startTime = new Date().getTime();
    while (new Date().getTime() - startTime <= ms) {
        // delay
    }
}

this.addEventListener("message", function (e) {
    console.log(e);
    console.log(e.data);
    delay(3000);
    console.log("AAA");
    self.postMessage("tarefa demorada finalizada");
});
