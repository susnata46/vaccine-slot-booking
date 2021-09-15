console.log('Hello World');

class Otp {
    constructor(mobile, secret) {
        console.log("Inside Constructor");
        this.mobile = mobile;
        this.secret = secret;
        console.log(mobile, secret);
        console.log("Generating OTP.....");
    };

    generate_otp() {
        console.log("Getting inside generate_otp");
        console.log(this.mobile);
        console.log(this.secret);
        const url = "https://api.CoWIN.gov.in/api/v2/auth/generateMobileOTP";

        const xhr = new XMLHttpRequest();

        xhr.open("POST", url, false);
        xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 SECSSOBrowserChrome");
        xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("pragma", "no-cache");
        xhr.setRequestHeader("origin", "https://selfregistration.cowin.gov.in");


        xhr.onload = function () {
            if (this.status === 200) {
                console.log(this.status);
                console.log(JSON.parse(this.responseText));
            } else if (this.status != 200) {
                console.log("Error");
            }
        };

        //const data1 = `{"mobile":this.mobile,"secret":this.secret}`;

        const jsonData = {
            "mobile": this.mobile,
            "secret": this.secret
        };

        xhr.send(JSON.stringify(jsonData));

        console.log("We are done!!!");

    }
}

const otp1 =new Otp(8961202481,"U2FsdGVkX18vDwDor+oOIG7vSUnINtlc/pxQcNiBulCm8LT5Sza+aIISKLqImbpMnRYgsN2QACPhggLWgZEpQg==");
otp1.generate_otp();

