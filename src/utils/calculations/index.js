export const calculateAnnualInterest = (totalAmount, quotaAmount, periods) => {

}

export const calculateMonthlyInterest = (totalAmount, quotaAmount, periods) => {

}

export const calculateQuota = (totalAmount, periods, monthlyInterest) => {
    const result = totalAmount * (monthlyInterest * Math.pow(1 + monthlyInterest, periods) / (Math.pow(1 + monthlyInterest, periods) - 1))

    return Math.round(result)
}

export const calculateQuotaDetailed = (totalAmount, quota, periods, interest) => {

    const result = []
    let saldo = totalAmount

    for (let i = 1; i <= periods; i++) {
        const restInterest = saldo * interest
        const amort = saldo - restInterest
        result.push({
            restInterest,
            amort,
            saldo,
        })
        saldo -= amort
    }

    return result

}