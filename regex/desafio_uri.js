const arrayValuesURI = [];

const regexURI = /[\?&](?:(\w%+)=([\w%-]+))/g;

const URI =
    "https://www.google.com/search?q=regex&sxsrf=AJOqlzV9u5HzHAntOoeSsOI5ZwLhju8cNw%3A1674691968522&source=hp&ei=gMXRY_2sHby65OUP1smd0Ak&iflsig=AK50M_UAAAAAY9HTkLQDLCzkDrsrILegWb3AFU_mHDCa&ved=0ahUKEwj97I7f-eP8AhU8HbkGHdZkB5oQ4dUDCAc&uact=5&oq=regex&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyCwgAEIAEELEDEIMBMgoIABCxAxCDARBDMgoIABCxAxCDARBDMgsIABCABBCxAxCDATIECAAQQzILCAAQgAQQsQMQgwEyBwgAELEDEEM6BwgjEOoCECc6CwguEIAEELEDEIMBOggIABCABBCxAzoLCC4QgAQQxwEQrwFQGVimBGDZBmgBcAB4AIABcogBpASSAQMwLjWYAQCgAQGwAQo&sclient=gws-wiz";

let arrRetornoExecRegex;

while ((arrRetornoExecRegex = regexURI.exec(URI))) {
    arrayValuesURI.push({ key: arrRetornoExecRegex[1], value: arrRetornoExecRegex[2] });
    arrRetornoExecRegex = regexURI.exec(URI);
}

console.log(arrayValuesURI);
