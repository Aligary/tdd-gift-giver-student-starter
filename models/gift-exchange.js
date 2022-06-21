const { BadRequestError } = require("../utils/errors")


class GiftExhange{
    static pairs(names) {
        if(!names)
            throw new BadRequestError("There are no names")

        if(names.length%2 != 0)
            throw new BadRequestError("Need an even number of names")

        let pair=[]

        while(names.length) {
            let currentPair = []

            while(currentPair.length < 2 && names.length > 0) {
                let index = Math.floor(Math.random() * names.length)
                let nameSelected = names[index]
                names.splice(index, 1)
                currentPair.push(nameSelected)
            }
            pair.push(currentPair)
        }

        return pair

    }

    static traditional(names) {
        if(!names)
            throw new BadRequestError("There are no names")

        let index = names.length

        for(let i=index-1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * i)
            let temp = names[i]
            names[i] = names[randomIndex]
            names[randomIndex] = temp
        }

        let pair = []

        for(let i = 0; i < names.length; i++)
        {
            let name1 = names[i]
            let name2 = (i === names.length-1) ? names[0] : names[i+1]
            pair.push(`${name1} is giving a gift to ${name2}`)
        }

        return pair
    }
       
}

module.exports = GiftExhange