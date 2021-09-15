let mobile, txnId, otp, token, timestamp, ben, pref, session, available;

const secret = 'U2FsdGVkX1+HQAr4dz+duq8zfH7xAvGNjw7bG1OGY9OvIuvNf3P+2J2J0iM1tu3ENPXB6/rPZsvqB+f54ikhuw=='
axios.defaults.baseURL = 'https://cdn-api.co-vin.in/api/v2/'
const headers = () => ({
    'Content-Type': 'application/json',
})

async function generateOTP() {
    console.log("Inside this generate OTP");
    let mobile = document.getElementById("mobile").value ;
    console.log(mobile);
    const res = await axios({
        method: 'POST',
        url: 'auth/generateMobileOTP',
        data: {mobile, secret}
    })
    txnId = res.data['txnId']
    console.log(mobile)
    console.log({txnId})
    return res.data;
}

const baseURLNew =  'https://kvdb.io/ErWL3Zo96gQSinBcfQ2afn/'
let url1 = baseURLNew+ '8961202481';

console.log(url1);


async function validateOTP() {
    console.log("Inside validate OTP function");
    otp = generateOTP().then(res => console.log(res));
    console.log("=========");
    console.log(otp);
    console.log(txnId);
    try {
        const res = await axios({
            method: 'POST',
            url: 'auth/validateMobileOtp',
            data: {txnId, otp}
        })
        token = res.data['token'];
        console.log(token);
        //storeToken(res.data.token)
        //await login()
    } catch (err) {
        console.log({err})
    }
}

async function getOtpFromKvDB () {
    console.log("Inside getOtpFromKvDB");
    let response = await fetch('https://kvdb.io/ErWL3Zo96gQSinBcfQ2afn/8961202481');
    //otp = response.text();
    console.log(response.status);

    if(response.status===200) {
        let data = await response.text();
        console.log(data);
        otp = data;
        console.log("My otp is ");
        console.log(otp);
        document.getElementById("otpTextShow").innerHTML = otp;
    }
}

