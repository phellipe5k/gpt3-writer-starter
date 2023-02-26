const create = async (input) => {
    console.log(input, 'ausdhuasda')
    const response = await fetch('/api/generate', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userInput: input }) 
        
    })
    const data = await response.json();
    return data?.output;
};

export default  { create };
