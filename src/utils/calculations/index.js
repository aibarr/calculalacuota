export const calculateAnnualInterest = (totalAmount, quotaAmount, periods) => {

}

export const calculateMonthlyInterest = (totalAmount, quotaAmount, periods) => {

}

export const calculateQuota = (totalAmount, periods, monthlyInterest) => {
    const result = totalAmount * (monthlyInterest * Math.pow( 1 + monthlyInterest, periods) / (Math.pow(1 + monthlyInterest, periods) - 1))

    return Math.round(result)
}

export const calculateQuotaDetailed = (totalAmount, periods, interest) => {


}