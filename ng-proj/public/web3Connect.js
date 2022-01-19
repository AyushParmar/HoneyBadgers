var web3 
var SmartContractAddress = "0x19Ebd2C19f0499Cba9d163258FF6b19ED38bB9bb"
var SmartContractAbi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"l1","type":"address[]"},{"internalType":"address[]","name":"l2","type":"address[]"},{"internalType":"address[]","name":"l3","type":"address[]"}],"name":"addWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"checkInArr","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipPresaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_amount","type":"uint8"}],"name":"preSaleBuy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"preSaleCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numberOfTokens","type":"uint256"}],"name":"reserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setUnreveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newURI","type":"string"}],"name":"setUnrevealURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unreveal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unrevealURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteList","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]
var address = ""
var contract
var yesID

async function CheckMetamaskConnection() {
            
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        return true;
    }
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        return false;
    }
} 

async function connect(){ 
    try {  
         
        let res = await web3.eth.requestAccounts()
        address = res[0] 

        let preSaleBal = await contract.methods.checkInArr(address).call()  
        let whiteListBal = await contract.methods.whiteList(address).call()  

        
        
        yesID = (preSaleBal - whiteListBal) > 0 ? true : false  
        
    
        
        if(address !==""){
            document.getElementById("btn-secondary-02").innerHTML = address.substr(0,6) + ("...") +address.substr(-4);
            if(yesID === true){
                let mintval = preSaleBal - whiteListBal ;
                Swal.fire({
                    title: 'Congratulations!',
                    text: `You are eligible for Whitelist Spots. You can Mint upto: ${mintval} NFTs`,
                    imageUrl: 'image/badgerflatcolor2.png',
                    background: 'rgba(0, 0, 0, 0.87)',
                    imageWidth: 200,
                    imageHeight: 200,
                  })
                document.getElementById("mintvalue").innerHTML = mintval;  
                var eladd = document.getElementById("yellowbox");
                eladd.classList.remove("yellowadd");
                eladd.classList.add("yellowremove");
                var eladd2 = document.getElementById("yellowbox2");
                eladd2.classList.remove("yellowremove");
                eladd2.classList.add("yellowadd");
                var eladd3 = document.getElementById("yellowbox3");
                eladd3.classList.remove("yellowadd");
                eladd3.classList.add("yellowremove");
                var eladd4 = document.getElementById("yellowbox4");
                eladd4.classList.remove("yellowremove");
                eladd4.classList.add("yellowadd");
            }else{
                Swal.fire({
                    title: 'Wallet Connected!',
                    text: `Public Sale will go Live shortly. Stay Connected!`,
                    imageUrl: 'image/badgerflatcolor2.png',
                    background: 'rgba(0, 0, 0, 0.87)',
                    imageWidth: 200,
                    imageHeight: 200,
                  })
            } 
        }
        // if(address !==""){
        //     document.getElementById("btn-secondary-10").innerHTML = address.substr(0,6) + ("...") +address.substr(-4);    
        // }
        if(address !==""){
            document.getElementById("btn-secondary-20").innerHTML = address.substr(0,6) + ("...") +address.substr(-4);
            if(yesID === true){
                let mintval = preSaleBal - whiteListBal ;
                Swal.fire({
                    title: 'Congratulations!',
                    text: `You are eligible for Whitelist Spots. You can Mint upto: ${mintval} NFTs`,
                    imageUrl: 'image/badgerflatcolor2.png',
                    background: 'rgba(0, 0, 0, 0.87)',
                    imageWidth: 200,
                    imageHeight: 200,
                  })
                document.getElementById("mintvalue").innerHTML = mintval;  
                document.getElementById("mintvalue2").innerHTML = mintval;
                var eladd = document.getElementById("yellowbox");
                eladd.classList.remove("yellowadd");
                eladd.classList.add("yellowremove");
                var eladd2 = document.getElementById("yellowbox2");
                eladd2.classList.remove("yellowremove");
                eladd2.classList.add("yellowadd");
                var eladd3 = document.getElementById("yellowbox3");
                eladd3.classList.remove("yellowadd");
                eladd3.classList.add("yellowremove");
                var eladd4 = document.getElementById("yellowbox4");
                eladd4.classList.remove("yellowremove");
                eladd4.classList.add("yellowadd");
            }else{
                Swal.fire({
                    title: 'Wallet Connected!',
                    text: `Public Sale will go Live shortly. Stay Connected!`,
                    imageUrl: 'image/badgerflatcolor2.png',
                    background: 'rgba(0, 0, 0, 0.87)',
                    imageWidth: 200,
                    imageHeight: 200,
                  })
            }     
        }
        
    } catch (error) {

        console.log("error : " , error)
    }
}  

async function preSale(){ 
    try{  
        let num = document.getElementById("number").value  

        console.log("Num : " , num )
        
        if(num == "" || num <= 0 ){
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
            background: 'rgba(0, 0, 0, 0.87)',
            imageWidth: 200,
            imageHeight: 200, 
            title: 'Enter a valid Number!'
            })
        }else if(address == ""){
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'Wallet Not Connected!'
                        })
        }else{ 

            let preSaleActive = await contract.methods.presaleActive().call()  


            if(preSaleActive == true){

                let preSaleBal = await contract.methods.checkInArr(address).call()  
                let whiteListBal = await contract.methods.whiteList(address).call() 
    
                if(parseInt(document.getElementById("number").value) > parseInt(preSaleBal) - parseInt(whiteListBal) ){
                    Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                    background: 'rgba(0, 0, 0, 0.87)',
                    imageWidth: 200,
                    imageHeight: 200, 
                    text: `Presale buy limit exceded for the address`
                    })
                } else{
                    let num = document.getElementById("number").value   
                    let cost =  "40000000000000000"  
                    
    
                    cost = await web3.utils.fromWei(`${cost}` , 'ether') 
                    let amt = cost * num  
                    amt = web3.utils.toWei(`${amt}` , 'ether') 
                    let res = await contract.methods.preSaleBuy(num).send({from : address , value : amt}) 
                    
                }
              
            }else{  

                Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                background: 'rgba(0, 0, 0, 0.87)',
                imageWidth: 200,
                imageHeight: 200, 
                text: `Presale is not live yet`
                })

            }

        }

    }catch(error){
        console.log("error : " , error)
        Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'Error!',
                        text: `${error.message}`
                        })
    }
}
async function preSaleMob(){ 
    try{  
        let num = document.getElementById("number2").value  

        console.log("Num : " , num )
        
        if(num == "" || num <= 0 ){
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
            background: 'rgba(0, 0, 0, 0.87)',
            imageWidth: 200,
            imageHeight: 200, 
            title: 'Enter a valid Number!'
            })
        }else if(address == ""){
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'Wallet Not Connected!'
                        })
        }else{ 

            let preSaleActive = await contract.methods.presaleActive().call()  


            if(preSaleActive == true){

                let preSaleBal = await contract.methods.checkInArr(address).call()  
                let whiteListBal = await contract.methods.whiteList(address).call() 
    
                if(parseInt(document.getElementById("number2").value) > parseInt(preSaleBal) - parseInt(whiteListBal) ){
                    Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                    background: 'rgba(0, 0, 0, 0.87)',
                    imageWidth: 200,
                    imageHeight: 200, 
                    text: `Presale buy limit exceded for the address`
                    })
                } else{
                    let num = document.getElementById("number2").value   
                    let cost =  "40000000000000000"  
                    
    
                    cost = await web3.utils.fromWei(`${cost}` , 'ether') 
                    let amt = cost * num  
                    amt = web3.utils.toWei(`${amt}` , 'ether') 
                    let res = await contract.methods.preSaleBuy(num).send({from : address , value : amt}) 
                    
                }
              
            }else{  

                Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                background: 'rgba(0, 0, 0, 0.87)',
                imageWidth: 200,
                imageHeight: 200, 
                text: `Presale is not live yet`
                })

            }

        }

    }catch(error){
        console.log("error : " , error)
        Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'Error!',
                        text: `${error.message}`
                        })
    }
}

async function mint(){ 
    try{  
        let num = document.getElementById("number").value  

        console.log("Num : " , num )
        
        if(num == "" || num <= 0 ){
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
            background: 'rgba(0, 0, 0, 0.87)',
            imageWidth: 200,
            imageHeight: 200, 
            title: 'Enter a valid Number!'
            })
        }else if(num > 9){
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
            background: 'rgba(0, 0, 0, 0.87)',
            imageWidth: 200,
            imageHeight: 200, 
            title: 'Can mint upto 9 token only!'
            })
        }else if(address == ""){
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'Wallet Not Connected!'
                        })
        }else{ 

            let balanceOf = await contract.methods.balanceOf(address).call() 

            if(parseInt(balanceOf) + parseInt(document.getElementById("number").value) > 9){
                Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                background: 'rgba(0, 0, 0, 0.87)',
                imageWidth: 200,
                imageHeight: 200, 
                text: `An address can mint/own only 9 tokens. Number of tokens remaining : ${ 9 - balanceOf}`
                })
            } else{
                let num = document.getElementById("number").value   
                let cost =  await contract.methods.cost().call() 
                cost = await web3.utils.fromWei(`${cost}` , 'ether') 
                let amt = cost * num  
                amt = web3.utils.toWei(`${amt}` , 'ether') 
                let res = await contract.methods.mint(num).send({from : address , value : amt}) 
                
            }
          
        }

    }catch(error){
        console.log("error : " , error)
        Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'Error!',
                        text: `${error.message}`
                        })
    }
}

async function mintMob(){ 
    try{  
        let num = document.getElementById("number2").value  

        console.log("Num : " , num )
        
        if(num == "" || num <= 0 ){
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
            background: 'rgba(0, 0, 0, 0.87)',
            imageWidth: 200,
            imageHeight: 200, 
            title: 'Enter a valid Number!'
            })
        }else if(num > 9){
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
            background: 'rgba(0, 0, 0, 0.87)',
            imageWidth: 200,
            imageHeight: 200, 
            title: 'Can mint upto 9 token only!'
            })
        }else if(address == ""){
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'Wallet Not Connected!'
                        })
        }else{ 

            let balanceOf = await contract.methods.balanceOf(address).call() 

            if(parseInt(balanceOf) + parseInt(document.getElementById("number2").value) > 9){
                Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                background: 'rgba(0, 0, 0, 0.87)',
                imageWidth: 200,
                imageHeight: 200, 
                text: `An address can mint/own only 9 tokens. Number of tokens remaining : ${ 9 - balanceOf}`
                })
            } else{
                let num = document.getElementById("number2").value   
                let cost =  await contract.methods.cost().call() 
                cost = await web3.utils.fromWei(`${cost}` , 'ether') 
                let amt = cost * num  
                amt = web3.utils.toWei(`${amt}` , 'ether') 
                let res = await contract.methods.mint(num).send({from : address , value : amt}) 
                
            }
          
        }

    }catch(error){
        console.log("error : " , error)
        Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'Error!',
                        text: `${error.message}`
                        })
    }
}

$(document).ready(async function () { 
    var IsMetamask = await CheckMetamaskConnection() 
    console.log("IsMetamask : " , IsMetamask)  
    if (IsMetamask) { 
        let chainid = await web3.eth.getChainId()  
        console.log("chainid : " , chainid)
        if(chainid == 1){
            contract = await new web3.eth.Contract(SmartContractAbi , SmartContractAddress)  
        }else{
            Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'Please switch to mainnet'
                        }) 
        }
          
          
          
          
    }else{
        console.log("Metamask not detected");
        Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'Metamask not detected!'
                        }) 
    }


});