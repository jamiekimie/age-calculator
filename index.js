    /////////////////////////////////////////////////// AGE CALCUATOR ///////////////////////////////////////////////////////////////////////

  
    var birthyear = 1989;
    var birthmonth = 09;
    var birthdate = 02;

    var futureyear = 2020;
    var futuremonth = 09;
    var futuredate = 02;

    var age = (futureyear - birthyear);
    var beforebirthdayage = (age - 1);
    var birthmonthsum = (birthmonth - futuremonth);
    var birthdatesum = (birthdate - futuredate);


    if (age < 0) {
        console.log("You are not born yet!");
    }

    else if (birthmonthsum == 0 && birthdatesum == 0) { console.log("your Date of birth is " + birthdate + "/" + birthmonth + "/" + birthyear + ". age at the Date of " + futuredate + "/" + futuremonth + "/" + futureyear + " your age would be " + age); }
    else if (birthmonthsum == 0 && birthdatesum <= 0) {
        console.log("your Date of birth is " + birthdate + "/" + birthmonth + "/" + birthyear + ". age at the Date of " + futuredate + "/" + futuremonth + "/" + futureyear + " your age would be " + age);
    }
    else if (birthmonthsum == 0 && birthdatesum > 0) {
        console.log("your Date of birth is " + birthdate + "/" + birthmonth + "/" + birthyear + ". age at the Date of " + futuredate + "/" + futuremonth + "/" + futureyear + " your age would be " + beforebirthdayage);
    }
    else if (birthmonthsum < 0) {
        console.log("your Date of birth is " + birthdate + "/" + birthmonth + "/" + birthyear + ". age at the Date of " + futuredate + "/" + futuremonth + "/" + futureyear + " your age would be " + age);
    }
    else if (birthmonthsum > 0) {
        console.log("your Date of birth is " + birthdate + "/" + birthmonth + "/" + birthyear + ". age at the Date of " + futuredate + "/" + futuremonth + "/" + futureyear + " your age would be " + beforebirthdayage);
    }
    else { console.log("your Date of birth is " + birthdate + "/" + birthmonth + "/" + birthyear + ". age at the Date of " + futuredate + "/" + futuremonth + "/" + futureyear + " your age would be " + age); }

