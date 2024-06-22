const baseUrl : string = process.env.NEXT_PUBLIC_API_URL || '';
const chartUrl : string = process.env.NEXT_PUBLIC_CHART_API_URL || '';

export const getYahooChart = async (input_ticker : String, input_period1 : String, input_period2? : String, input_interval? : String) => {
    let query : string = baseUrl + chartUrl;

    query += `/${input_ticker}/${input_period1}`;
    if(input_period2) {
        query += `/${input_period2}`;
    }
    if(input_interval) {
        query += `/${input_interval}`;
    }
    const res = await fetch(query);
    return res.json();
}