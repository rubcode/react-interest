export default function createInterest(data){
    const month = data.months
    const response = []
    let restAmount = data.amount
    let acumulateInterest = 0;
    for (let index = 0; index <= month; index++) {
        const monthly = index === 0 ? "" : data.monthly;
        const interest = parseFloat(restAmount * (data.monthlyRate / 100))
        restAmount = parseFloat(restAmount - monthly);
        acumulateInterest += interest
        response[index] = {month: index, monthly: monthly,restAmount:restAmount,interest: interest, acumulateInterest: acumulateInterest}
    }
    return response;
}
