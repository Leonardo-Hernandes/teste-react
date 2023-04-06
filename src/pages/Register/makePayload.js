const makePayload = (item, adresses) => {
    const adress = [];

    adress.push({adress: item.adress})

    if(adresses.length > 0){
        for(let item of adresses){
            adress.push({adress: item.adress})
        }
    }

    const cpf = formatCpf(item.cpf)
    
    const payload = {
        name: item.name,
        email: item.email,
        cpf: cpf,
        adress: adress,
        password: item.password,
        phone: item.phone,
        isDeleted: false
    }

    return payload;
}

const formatCpf = (cpf) => {
    const cpfWithoutDots = cpf.replaceAll(".", "");
    const formatedCpf = cpfWithoutDots.replace("-", '');

    return formatedCpf;
}

export default makePayload