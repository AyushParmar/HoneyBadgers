

var Web3 = require('web3'); 

var web3 = new Web3('https://mainnet.infura.io/v3/ba2ac3623ca14f85ba6f60b9ed057d37'); 
var SmartContractAddress = "0x19Ebd2C19f0499Cba9d163258FF6b19ED38bB9bb"
var SmartContractAbi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"l1","type":"address[]"},{"internalType":"address[]","name":"l2","type":"address[]"},{"internalType":"address[]","name":"l3","type":"address[]"}],"name":"addWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"checkInArr","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipPresaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_amount","type":"uint8"}],"name":"preSaleBuy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"preSaleCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numberOfTokens","type":"uint256"}],"name":"reserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setUnreveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newURI","type":"string"}],"name":"setUnrevealURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unreveal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unrevealURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteList","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]

var metadata = [
    {
      "dna": "aa96818ef063d9fc4fe72fc2c99f6b203123ca8d",
      "name": "#1",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmZAPZuwe4DUgzmVRRuAMe5Pmmxv7zMpFTEt9QvbmMXtAH",
      "edition": 1,
      "date": 1634814514329,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "ChineseCollarP2" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "greenmohawk" },
        { "trait_type": "Standard Hand Right", "value": "Badger snake" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "7c31d083b03d4bfe99fde94965dd75a27f9d2525",
      "name": "#2",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qmd4i65CqkJLyutBzE4pj3t6Jpv3Yd1H1bDy5aCgpb8Wpb",
      "edition": 2,
      "date": 1634814515247,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "TrenchCoat" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "greenmohawk" },
        { "trait_type": "Standard Hand Right", "value": "wand" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "a3d8ee500755e045d4a8db26d98c3d4733e8ed05",
      "name": "#3",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qme4Y5iwBVXX9LNQ7sZtg9dFJ1VKA54ZdM64EZeAVNCEDi",
      "edition": 3,
      "date": 1634814516038,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "prisoner" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "ugi gun" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "38e052ca9a92282188f87aa6627cb5136bfb0802",
      "name": "#4",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmfHrkvgaJ6Axx22fEtdppKgwXLWRdzkeUsJxBPLbsMmVM",
      "edition": 4,
      "date": 1634814516789,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "HenleyTee" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "85a65467658ac00d3127ad94449c585d83ef31c6",
      "name": "#5",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmTqUHqnKJ5XBAqBz9x9HXYduUAfcPK4eLSZrgoCAFednW",
      "edition": 5,
      "date": 1634814517424,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "wizard robe" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "pipe" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "96be77bbd5c9ebb09057eba8da3b05f9b8ebf8b9",
      "name": "#6",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmawpcQGHM9Dw2AuGUQgKKdePrSFh8zttK6ACjecrdQSGT",
      "edition": 6,
      "date": 1634814518288,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "CardiganRed" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "magentamohawk" },
        { "trait_type": "Standard Hand Right", "value": "whip" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "e8ae38820e3e39292f879aecfb08a8d25eb3606e",
      "name": "#7",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmaDaHdfvCevhN2q9WfD6fD3u6yzPn175covDGSs8uEYXj",
      "edition": 7,
      "date": 1634814519164,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "ChinesecollarP3" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "greenmohawk" },
        { "trait_type": "Standard Hand Right", "value": "pipe" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "d944012cf4e24a54976f1008f14cc96da2b95185",
      "name": "#8",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qme7YoV4gc1DzNEbQc1YFBt6FiRojVDEqoxPJzLd7EJbxe",
      "edition": 8,
      "date": 1634814520282,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "Spacesuit2" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "greenmohawk" },
        { "trait_type": "Standard Hand Right", "value": "pistol" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "8651d19d2f5577cc34e178b82f7002a0e3fd669d",
      "name": "#9",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmeHu2UpcTp1rS7HwNroNsrTYpyxQidwDuEemoJ5SMmwZq",
      "edition": 9,
      "date": 1634814521037,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "doctorsCoat" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "gunA" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "5161c0bf5dfe1c0f00fa04b7648c5747fe36df46",
      "name": "#10",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmNjNeSxL7qe76AW7MQCvTFtGrWkVvcukJC8g4YxqdGs91",
      "edition": 10,
      "date": 1634814521808,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "HoodieBlue" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "blackmohawk" },
        { "trait_type": "Standard Hand Right", "value": "knife" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "b3bc009a285c99934b5526ade1e2baba1bce0f4e",
      "name": "#11",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmXJXaJ9TXw9ufgqWePM9v2JV9xprGjrPREfT6jVeo6V3J",
      "edition": 11,
      "date": 1634814522893,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "hsshirtg" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "horns" },
        { "trait_type": "Standard Hand Right", "value": "pistol" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "00fb3319a0bf5b3ab7de6f28945389662590eacc",
      "name": "#12",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQjZhEg8HPXni9QjDu6bCnxTuZvnmgcFM7bW4bGyrggnU",
      "edition": 12,
      "date": 1634814523636,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "wizard robe" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "fd76fa076f682ac25fb3b5fdf321c4e0f75cd761",
      "name": "#13",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmbddFyqE1bDCFaanRdV6vgXceAMP2XUnUyuhFrVJT4Fx5",
      "edition": 13,
      "date": 1634814524343,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "doctorsCoat" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "santa cap" },
        { "trait_type": "Standard Hand Right", "value": "cigg" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "900d75821d50a7849fdb9ff1cedfdb1104bb88a0",
      "name": "#14",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmUpxwiakW6k4eFzptgHUKNV1FtTjzft8oRBytyc8fXiE8",
      "edition": 14,
      "date": 1634814525174,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "LeatherJacket" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "greenmohawk" },
        { "trait_type": "Standard Hand Right", "value": "shovel" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "94e05979fe6d9ae5a88333ac7f6cdc1c9a3079ea",
      "name": "#15",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmYM2FGZhPEgELTTwtBfGspeKqsnju4CmtZBe9fP3UjE9P",
      "edition": 15,
      "date": 1634814526018,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "ChineseCollarP2" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "PirateHat" },
        { "trait_type": "Standard Hand Right", "value": "pipe" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "01dad47f0a5e6d17d10bf379fbe5c790ae51195d",
      "name": "#16",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmSNaAna4WARj5MUxByKZrCpWDf75zzRbCJC1Cv53DyBEW",
      "edition": 16,
      "date": 1634814527099,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "santa costume" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "pistol" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "a95e5bce5c410601be5a4f9decb88e44644ed8d0",
      "name": "#17",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQvehgAUMRfFF3n4Dx3mrYsuWT1k55kYJ4hFefjoFgXyJ",
      "edition": 17,
      "date": 1634814527794,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "doctorsCoat" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "Copy of grenade" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "7fa0f1e240788034539fa2d4151be62afcf730fe",
      "name": "#18",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmPG13UwdkP7mqWgMs4QqU9fF5t6w1k14Kt9mumMizt3jW",
      "edition": 18,
      "date": 1634814528567,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "prisoner" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "FedoraHat" },
        { "trait_type": "Standard Hand Right", "value": "ugi gun" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "06d8ebc52001f46b4de1480153b9ac2a676004fe",
      "name": "#19",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmY2oJWVJMsehYQ2715B4fPofb8EXGGX9FstYT8vJGRvhY",
      "edition": 19,
      "date": 1634814529357,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "LeatherJacket" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "magentamohawk" },
        { "trait_type": "Standard Hand Right", "value": "pipe" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "080c40ea6e81ed1f1ebea9e6c78cb5484ccd6f8a",
      "name": "#20",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQQMn7hLUnqTgZ8Qhe37R4xbP8gnns83cMgazrxkMVRc8",
      "edition": 20,
      "date": 1634814530230,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "hsshirtb" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "magentamohawk" },
        { "trait_type": "Standard Hand Right", "value": "gunA" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "e1751fb76a723d176457e7a3ff008fea0b3e49ff",
      "name": "#21",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmdDvhG9VtftTxy76L3Cz13eHyZwBaZGDCi1PQyoXpjsE4",
      "edition": 21,
      "date": 1634814531251,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "HoodieAmber" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "FedoraHat" },
        { "trait_type": "Standard Hand Right", "value": "gunA" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "4e37f604a2367ab106faef90baeb53dd8039e341",
      "name": "#22",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmbpJ4YYH8PwCh2VJJaFsT9goRy85J7qXE5xuuvbK8NqMp",
      "edition": 22,
      "date": 1634814532127,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "LeatherJacket" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "knife" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "ec08f7d37f72ebc9152e07626a5791fc76fb639a",
      "name": "#23",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmR92jCE6HByR4XNTYTwppVTtDgMSWzFkc8Qxsno763ad2",
      "edition": 23,
      "date": 1634814532998,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "TrenchCoat" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "PirateHat" },
        { "trait_type": "Standard Hand Right", "value": "SMG" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "bcd2a0e8cda5d35d6bf02b10b589be70ab4e196c",
      "name": "#24",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmVAxyf49SxT5CQmqswbN9SSPoFtLEj14tohpy7WFLUsY1",
      "edition": 24,
      "date": 1634814533884,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "tux" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "d0d694779870814eaefe830c0004223c2a0586eb",
      "name": "#25",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmewM1Qjm9rU2KLVbeeHw2AxDTPgm77xzcBujqYj1dmBmu",
      "edition": 25,
      "date": 1634814534795,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "Badger_Samurai body" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "Badger snake" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "914aa36505ca558b50689447c36cf31e22f86111",
      "name": "#26",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmfFY2DUz9RvHuK2L8bgKV7MJA2yX5oRoP7aYfeLqs89rP",
      "edition": 26,
      "date": 1634814535502,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "shirtstripethick" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "shovel" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "8b70dc2cf843282d35c533bd5bab10b6b9741c03",
      "name": "#27",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmcrP8L65h4EJiPmceD9oo2FLantEbXXbeUizBJ6dpjVPQ",
      "edition": 27,
      "date": 1634814536270,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "HenleyTee" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "crown" },
        { "trait_type": "Standard Hand Right", "value": "whip" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "69265c423970d19ece67fc85f5b41ce5695a0752",
      "name": "#28",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmURsgHnMcpNqKn4vG4C1YMCBi6TpRQCEYFVBMGeX3oTLF",
      "edition": 28,
      "date": 1634814537089,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "TrenchCoat" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "cigg" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "c65385300c2d8ddd02ceaf991afcba6141921983",
      "name": "#29",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQNaHpu7jLtaLzrvUuaj3HXrU6UrHVzp5X494Ffd1GuRT",
      "edition": 29,
      "date": 1634814537947,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "tux" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "blackmohawk" },
        { "trait_type": "Standard Hand Right", "value": "Badger snake" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "9e785223d3961a1c3e8d910b7357637367f751af",
      "name": "#30",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qmexm5uPcbxXsWbaaHTF8obq7ctsxP3NyGKzkTznhzq6Wp",
      "edition": 30,
      "date": 1634814538707,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "wizard robe" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "santa cap" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "150caee621fccaf1236b33fcd3981e2ee7430749",
      "name": "#31",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQfPctvtCYiwnGgJGgENHLydDyGP8U396ARvRZ3cYB91B",
      "edition": 31,
      "date": 1634814539684,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "Badger_Samurai body" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "horns" },
        { "trait_type": "Standard Hand Right", "value": "gunA" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "c1924b15262b5e281e164541b68dae5444e0668e",
      "name": "#32",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQLgsWe3veseNZ6THNfpuuJqSm5szvdtKQ8M7BxjtWFdK",
      "edition": 32,
      "date": 1634814540629,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "ChinesecollarP3" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "OliveWreath" },
        { "trait_type": "Standard Hand Right", "value": "shovel" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "657ef4e2b70179874b24ba1bf749a60cacca583f",
      "name": "#33",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmcsZsYFQc77gPE4GosPuN9S9YBYmhLWs54AFWWBmkFAdF",
      "edition": 33,
      "date": 1634814541270,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "prisoner" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "pipe" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "e3ed38785ad7a843d2d524133ef804cb8deb5be6",
      "name": "#34",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmRSv86uZ6a2KHNkEpqsSJN3EApvXr43P9KonBHtYYhuVm",
      "edition": 34,
      "date": 1634814542050,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "BikerJacket" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "wand" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "470019a110abeb185d2823826075454f221dfad3",
      "name": "#35",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmRKxjWL45kM4UQ8JKzBR63v6TZG3oA4ZTHMNrmgwKqADP",
      "edition": 35,
      "date": 1634814542772,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "hsshirtb" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "wand" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "60f325baceff9a82b4461b679746964c59f75b19",
      "name": "#36",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qma5HoxLi5BQpM8iTCTdNUBSPCYbwBZD93Nyt6H3vjhEDT",
      "edition": 36,
      "date": 1634814543855,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "BikerJacket" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "pistol" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "1f6aeb9eafb9de61cad7d7f363606d9d4424fd68",
      "name": "#37",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQnsgqESZ2fntJoeaendt3j2mc26F6kGkk8itqjScwwfP",
      "edition": 37,
      "date": 1634814544825,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "MonkOutfit" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "SMG" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "1d59fe307ac83a4f00855954565fae8724335070",
      "name": "#38",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmTwLbGkwbD5154sgSETqTQVPu2zKzMRJ6nySrx4LQK4nz",
      "edition": 38,
      "date": 1634814545490,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "prisoner" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "greenmohawk" },
        { "trait_type": "Standard Hand Right", "value": "knife" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "997c963922456042cc01223112bb9220fa34e8bc",
      "name": "#39",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmTaDwCNi4kBxL4mhuWXTiibnKaJHDSRfxHuDSztLfNs2F",
      "edition": 39,
      "date": 1634814546257,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "doctorsCoat" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "ugi gun" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "201b662f1515ea30948c380873815b859fe02683",
      "name": "#40",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qmf7jNm7Y8y7Rdgt8Nx6pAuLMn2P9gtEBpQ4iBJBGH836u",
      "edition": 40,
      "date": 1634814547139,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "suit" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "greenmohawk" },
        { "trait_type": "Standard Hand Right", "value": "knife" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "fcaf32d4f29ad4b32b91aebea28c618cd87945cc",
      "name": "#41",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmbhkbW7YFXMdZWJ7pUankwKehB7kDZaANTdtVoBU6PPUS",
      "edition": 41,
      "date": 1634814547976,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "tux" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "santa cap" },
        { "trait_type": "Standard Hand Right", "value": "cigg" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "89f484e24f9b984d265a5aafa5158b15f3aef550",
      "name": "#42",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qmbn6FwK7dgKSE85imLkL9Dzb4AdDHJLEVbm97bsY8bLob",
      "edition": 42,
      "date": 1634814548869,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "ChineseCollarP2" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "71e38258383d8a2e93e662b41facf0c146db4892",
      "name": "#43",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qma6diiYXpKNLo5T4GXU2P1YSReePUeKYJbhHt1XXHGvQH",
      "edition": 43,
      "date": 1634814549727,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "TrenchCoat" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "blackmohawk" },
        { "trait_type": "Standard Hand Right", "value": "ugi gun" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "1e08dff98c5f4efa2cab594cadc5dc899f5b38fe",
      "name": "#44",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmSGdTm9tQJ7dtbG8NehC2XLejrat3J7CGjqd4ChXYKNEd",
      "edition": 44,
      "date": 1634814550635,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "suit" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "snake on head" },
        { "trait_type": "Standard Hand Right", "value": "whip" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "1d20b719e6bc2ba6b2891c1a7d36490658649342",
      "name": "#45",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qme29zE77syCb7PPuUGKHRaaYttBur6ra7w7ojxmSt2C29",
      "edition": 45,
      "date": 1634814551410,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "HenleyTee" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "santa cap" },
        { "trait_type": "Standard Hand Right", "value": "gunA" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "5f1be92f9c8724e3cca4aa44dff05d3e9660741e",
      "name": "#46",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQq37hYhqjwVFWa5SUo7p7FNs6ZwNfaxfPvVQJTmjpVsp",
      "edition": 46,
      "date": 1634814552153,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "santa costume" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "PirateHat" },
        { "trait_type": "Standard Hand Right", "value": "ugi gun" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "7c617e1ae063a2720be6c107c6a4d3904912fbae",
      "name": "#47",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmY99mUfkkvwsuExxaCiX7VyajxmFU7r5uKCrE2ZBQ9tcz",
      "edition": 47,
      "date": 1634814552966,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "santa costume" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "448cb0405593ad78828defd1c027ec68de31e5a4",
      "name": "#48",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmcbLuKTzMNroSbVBHbYMnVwdFA3xMR8Sh3GPRBj9Y7qUQ",
      "edition": 48,
      "date": 1634814553915,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "MonkOutfit" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "santa cap" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "1df731fdd3883cf5e436c5faab4ca2f25afd5937",
      "name": "#49",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qmb1rUYqxRAtyzKNqJmmweg3MFvGfrsPdkd9HvEjAsaQmd",
      "edition": 49,
      "date": 1634814554591,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "prisoner" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "magentamohawk" },
        { "trait_type": "Standard Hand Right", "value": "whip" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "10c26e85c72edb3690f34d87c993412c7377bf41",
      "name": "#50",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qmd4BLJ4eYzTrStEVua3q9iBuWbZeu1UZPdGkiWPPGwchL",
      "edition": 50,
      "date": 1634814555667,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "santa costume" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "pistol" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "fe7f65149824b6d7f7f5a59d44daf10c24fb638d",
      "name": "#51",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmbrecRRr4MbMPa1XAy4md4czZER4TuVruNgKu51WEci6t",
      "edition": 51,
      "date": 1634814556514,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "TrenchCoat" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "SMG" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "127c454ab6e355573b12be224834573f69ad6bdd",
      "name": "#52",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qma7ycodX1etnQEeV15f8CaUPkJi6yAFyViFsPvdkRKoKZ",
      "edition": 52,
      "date": 1634814557418,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "ShirtPaattern1" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "snake on head" },
        { "trait_type": "Standard Hand Right", "value": "SMG" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "6a72ec084e906a2378cab02703bf0c00214929f6",
      "name": "#53",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmTj2rfvB97QXUev7G2gQ62qk3o3pgPrmVk8UGkT8qhH3Y",
      "edition": 53,
      "date": 1634814558205,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "shiet new 2" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "blackmohawk" },
        { "trait_type": "Standard Hand Right", "value": "knife" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "3ada05e4745bd0368b2de3665c750a062d84597d",
      "name": "#54",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmWqNACZXKxifiy924rbTjKs5omNjvvKaMtY5MoEaJwNtQ",
      "edition": 54,
      "date": 1634814558987,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "LeatherJacket" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "FedoraHat" },
        { "trait_type": "Standard Hand Right", "value": "SMG" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "9d35ac70bf3899580bbc3f507da15c0b94c38dda",
      "name": "#55",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmfMfZt74u7caW6SJ3qrsfSadzqXPYdjPTdyF16axq9XQh",
      "edition": 55,
      "date": 1634814559867,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "ChinesecollarP3" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "OliveWreath" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "4246f09541d9d72dc56d1b7d26a939349717078e",
      "name": "#56",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmScExDQnTjeVvM3MGhQ6AhsUmA2k8T9Ned2sUQoHoQPKM",
      "edition": 56,
      "date": 1634814560710,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "CardiganRed" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "blackmohawk" },
        { "trait_type": "Standard Hand Right", "value": "knife" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "d0ebfa6258af79d28770025ac4e0f30316bb3615",
      "name": "#57",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmYC1QdUWTeRCW9ePSKhyDABiqsBGdiP9xGLXg7n8xyupe",
      "edition": 57,
      "date": 1634814561550,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "TrenchCoat" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "wand" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "036c06b6e94633a457edd8beeffd9f0352a1d241",
      "name": "#58",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQHVnhKyqafyjiFErAAyL3fBMgj63QUsbcbNP5ifgzVog",
      "edition": 58,
      "date": 1634814562584,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "snake suit" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "SMG" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "9d2ebf6f0090ebdb304c886dd44dacf222ad7f05",
      "name": "#59",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmctGPxN6gWcVzWnaxrs7BhUbxorFSJDbuHdQJFHvjjkBB",
      "edition": 59,
      "date": 1634814563289,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "doctorsCoat" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "gunA" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "fe9f681a8cc14e963cbff98eb4ba688f76dc2692",
      "name": "#60",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmS2LqcHVFjBkwsHncRqrpSHHBDVEXtWsTPDo51KJvuuVX",
      "edition": 60,
      "date": 1634814563937,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "wizard robe" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "Copy of grenade" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "f89c3ad84e4f26c1939dfb7e5249d96edc516217",
      "name": "#61",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmW4EppgdLevyEEKNBPJ4fG2sDgkRK2dEN3fkqfMnbBw3K",
      "edition": 61,
      "date": 1634814564679,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "doctorsCoat" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "blackmohawk" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "68f567279ee21f1fb68306d6e8876d21a540b367",
      "name": "#62",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQBKxYJzQAb9pTcxzsLyi7oD54iaM8osQcoBv4jJ2EVjX",
      "edition": 62,
      "date": 1634814565567,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "ChinesecollarShirt" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "Badger snake" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "39ca2a21bc68d92b76862cc65fbc337293a583a9",
      "name": "#63",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmS7iHotFxhDjS5V5eu6pDuvBW3kUnGs8S5URJbja4NBGy",
      "edition": 63,
      "date": 1634814566383,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "HoodieBlue" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "crown" },
        { "trait_type": "Standard Hand Right", "value": "Badger snake" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "6c3e4bcae0b67467cf4c60d118fe36f12acbad34",
      "name": "#64",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmdkG3iqjMADcY8jQVA7VfCjiYke9DkR5T64nqs8MqaEj5",
      "edition": 64,
      "date": 1634814567112,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "wizard robe" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "gunA" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "a01947d14b85570a326f5e4268f1e500f3800af1",
      "name": "#65",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmTRRhUULfZPyKSBUMcJY9fjegaw7A2uMu5qMdMu9xqYCS",
      "edition": 65,
      "date": 1634814568000,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "TrenchCoat" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "horns" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "a3e61c696c5cd65cf2869b9812c390bde951fd37",
      "name": "#66",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmZWuHRo5gmirV97m5zyiwtfRRThdsreTertkQxtjmwFmP",
      "edition": 66,
      "date": 1634814568736,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "prisoner" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "magentamohawk" },
        { "trait_type": "Standard Hand Right", "value": "SMG" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "da47500c0dcf98a1e52aa9ffc4160c2ada825d4a",
      "name": "#67",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmYNPkKBsovUygDSLLyKmTfMaddA31Zv8eXeVvD7yNHBTL",
      "edition": 67,
      "date": 1634814569480,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "wizard robe" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "FedoraHat" },
        { "trait_type": "Standard Hand Right", "value": "shovel" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "31b605dd743eb1b71302b3c9627fc3b5dfdbc7f7",
      "name": "#68",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmXdqV2p9Lx3DiNSWJCxdwnMJ61DgGANNLgkfGPqgsXQmJ",
      "edition": 68,
      "date": 1634814570202,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "shiet new 2" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "wand" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "0564bd1d09e4a43c3637f7eec20711da61950f20",
      "name": "#69",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmXvzmb1PC5o4JV59CYxUAdHcMFwBq23JNxMHwMBNeaz7G",
      "edition": 69,
      "date": 1634814570892,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "shirtstripethick" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "PirateHat" },
        { "trait_type": "Standard Hand Right", "value": "SMG" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "70e0691f6b0216da2d96afd3f4b77ef513513ac2",
      "name": "#70",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmdmzuZo9rjFYEWfckGxTQW6boLt5kV42J1k8PABZg8ieC",
      "edition": 70,
      "date": 1634814571697,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "LeatherJacket" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "FedoraHat" },
        { "trait_type": "Standard Hand Right", "value": "Badger snake" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "ff204fc5e2b5ea99cd3f12001151d4dec214a586",
      "name": "#71",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmaLEj76aBWwNkLXhBG2H6S7gNw7zn24q5vxPAJRJ2Yv5K",
      "edition": 71,
      "date": 1634814572603,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "ShirtPaattern1" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "OliveWreath" },
        { "trait_type": "Standard Hand Right", "value": "shovel" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "13e902160b5ff8ad5494e79c876b18252ec57154",
      "name": "#72",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmbRFuTegt3rKgfk7AS8yXm6xinvA15hfTLRQ99mrynDwu",
      "edition": 72,
      "date": 1634814573348,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "hsshirtb" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "ugi gun" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "df12037c7ea84c64506f5fe2b13930d3e504161e",
      "name": "#73",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmXF2nkMzAMFYJfYfLwvUrjHjE2X5WL9X84xqMDFzFCGyv",
      "edition": 73,
      "date": 1634814574283,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "Badger_Samurai body" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "pipe" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "60b81dccadb5425182e8ba53a3cfb2a558464415",
      "name": "#74",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmWKUZE9ScDJkmhaEhBqYEuMwxxC1YDxHRn87na2eZnrrq",
      "edition": 74,
      "date": 1634814575054,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "santa costume" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "PirateHat" },
        { "trait_type": "Standard Hand Right", "value": "Badger snake" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "57af920ed2695d4e91185dc84556ff093f411a71",
      "name": "#75",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmW5SBQoysTtoeWKWHJLFMFuBAeu2fCuj9UsDenDGU3Fbo",
      "edition": 75,
      "date": 1634814575941,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "shirtabstrctpattern" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "FedoraHat" },
        { "trait_type": "Standard Hand Right", "value": "pipe" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "e7ac92deabf19b6965bfd83d5f8cf072261e118f",
      "name": "#76",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmexZZxpjrbdMaMEy8ghHrJbnuPcDqba5urkuNu4Pk3mVn",
      "edition": 76,
      "date": 1634814576706,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "BikerJacket" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "cigg" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "3e0ed494a07cde89b1bfd23a952c7dfc8e60d493",
      "name": "#77",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmeC6KiVJtPSNfvHEvehidvukebzHBMknSxxu81KJzXFXs",
      "edition": 77,
      "date": 1634814577536,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "CardiganRed" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "ugi gun" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "0cd79b08dc078d7a627150ef91a2027d42cb955c",
      "name": "#78",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmeHbffBx73D1Qpq76q5hYvAdGzgDmv2Rsxh8YeQFoTwJD",
      "edition": 78,
      "date": 1634814578380,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "shirtabstrctpattern" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "snake on head" },
        { "trait_type": "Standard Hand Right", "value": "wand" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "0340338a919d4f504060f5616cde204900e06f0e",
      "name": "#79",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmZbUmTDY4kHzXpBYmkxqGcKrTQKDaPxcmAFv2RWANWg6t",
      "edition": 79,
      "date": 1634814579309,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "suit" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "PirateHat" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "ed9a347c1206bdcd75835827251c5eee8c83f633",
      "name": "#80",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmWfk3bftvrgaq2YZBnHheqNU1FDUyPu7FeyNkE5sciLgr",
      "edition": 80,
      "date": 1634814580160,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "ChinesecollarShirt" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "greenmohawk" },
        { "trait_type": "Standard Hand Right", "value": "wand" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "4aa3a55c370bbb3c8dbc6fe04db4ed9e960a7b76",
      "name": "#81",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmY3rcWZuZcm72k75f7Gb2whYFWtr4pH1TphQQobh8dD3j",
      "edition": 81,
      "date": 1634814580910,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "HenleyTee" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "crown" },
        { "trait_type": "Standard Hand Right", "value": "SMG" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "7cd81399e8a936e877d5bb8f22e43c8763d5b0e1",
      "name": "#82",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qmau6fjYe3gx6zgfq1y9F81mqk5BKErRnuxMh2HgNhEwjv",
      "edition": 82,
      "date": 1634814581652,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 4" },
        { "trait_type": "Outfits All", "value": "hsshirtg" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "PirateHat" },
        { "trait_type": "Standard Hand Right", "value": "Copy of grenade" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "42b97fd2f757b933c2eefdb84b9621764519ba3a",
      "name": "#83",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/Qmc4mjfbBrYZKbTYLoK28pzvG8VWN12wTBt5q3iSWerhnw",
      "edition": 83,
      "date": 1634814582911,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "Badger_Samurai body" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "PirateHat" },
        { "trait_type": "Standard Hand Right", "value": "pistol" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "9fcdfa93f707960d8fda33430184c05127e808af",
      "name": "#84",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmPsSjgCpp3QAqAwH3xXq2t7uDiQ7p6vGXXGKJ9pWJShXy",
      "edition": 84,
      "date": 1634814584072,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "Spacesuit2" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "blackmohawk" },
        { "trait_type": "Standard Hand Right", "value": "pistol" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "488d9d3d31d68863104b72380c9efd525eee0dc5",
      "name": "#85",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmXF9jq6iRehkiApFFpAQNQ3LuPTH1xLeboJh3BTvBvpUH",
      "edition": 85,
      "date": 1634814584779,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "HenleyTee" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "santa cap" },
        { "trait_type": "Standard Hand Right", "value": "wand" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "52e539904a8f225c57fc3bc9a7d078ac8082fe99",
      "name": "#86",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmYQkqg9frayJm3qaZv5nhj4AznsvZnj1nhdF5ZyosMrfM",
      "edition": 86,
      "date": 1634814585554,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "HoodieBlue" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "crown" },
        { "trait_type": "Standard Hand Right", "value": "knife" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "309029d226c7a6d7f7be6857711d072b7ab3abb5",
      "name": "#87",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmQTbHptsxTRX5JcXnHBRzzcHEBQc24d9hvLnU5ZC8UxgU",
      "edition": 87,
      "date": 1634814586277,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "doctorsCoat" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "greenmohawk" },
        { "trait_type": "Standard Hand Right", "value": "SMG" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "4064c17fc8b603557b94ae86675449e9c7fcbbfc",
      "name": "#88",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmZQ6TxZh5Y8PWiUAdq5kHNomoESR3tsAAMeWLA1Vw4mAh",
      "edition": 88,
      "date": 1634814587075,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "hsshirtb" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "horns" },
        { "trait_type": "Standard Hand Right", "value": "WizardStaff" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "23416001fbf179dea7694bdbc16415e4c48c5733",
      "name": "#89",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmNQYtW5xnfbqQX6bf9ETP5JZ5xTJugnBEZLFsDhBGCeWP",
      "edition": 89,
      "date": 1634814587858,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "tux" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "knife" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "a48b4142d27361b265f193f6a91444e74cfb9cd2",
      "name": "#90",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmXexnWWYp11hDf84AAKwxrD5r4GCJZ7kAmEy9KKSZ9FzB",
      "edition": 90,
      "date": 1634814588635,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "ChineseCollarP2" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "crown" },
        { "trait_type": "Standard Hand Right", "value": "cigg" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "670cd8aab101e7c8449d51a0ef74c27f51d00ca4",
      "name": "#91",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmcHjbrhhF7jTEYRamn7m9usBai8ZBVrHWBng1UsTv93Mk",
      "edition": 91,
      "date": 1634814589644,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "snake suit" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "Copy of grenade" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "01d775f3a042921f2969460a79c2cb0cafb48850",
      "name": "#92",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmUAbonDPrwybwmymZkLYp7cLdgdCKffdfYGypzXykFcK8",
      "edition": 92,
      "date": 1634814590569,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 5" },
        { "trait_type": "Outfits All", "value": "ShirtPaattern1" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "FedoraHat" },
        { "trait_type": "Standard Hand Right", "value": "cigg" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "777b24f2bead451ef8806388a9e099452c4c0efa",
      "name": "#93",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmeW673npXsnd2PGyqK8feajiSWMLD3JN78bmZdjcQNT4e",
      "edition": 93,
      "date": 1634814591263,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "shirtstripethick" },
        { "trait_type": "Eye Access", "value": "RimlessGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "ugi gun" },
        { "trait_type": "Ear Access", "value": "EarringBasic" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "10a54206529430f6d12b94d5b343232f378b411b",
      "name": "#94",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmbukY8dGisWMqwSxbaoNhRaQVxicefDiBKjAfBFS1ETMJ",
      "edition": 94,
      "date": 1634814591957,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "Spacesuit2" },
        { "trait_type": "Eye Access", "value": "RetroShades2" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "wand" },
        { "trait_type": "Ear Access", "value": "PiercingArrow" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "1aef37b7e240a465d36cba193628c245559c6749",
      "name": "#95",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmagNn8SWhF5bBxgdq9rBnUwri7AZHEMduE8eSEeFEJs6m",
      "edition": 95,
      "date": 1634814592744,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "HoodieBlue" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "snake on head" },
        { "trait_type": "Standard Hand Right", "value": "Badger snake" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "33cd00da4dff8e9221cc39915204f49a312bf8b7",
      "name": "#96",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmbTPG93RJCregKqZsG2FKRMM74qB3AxhFRDJU9CMnbG91",
      "edition": 96,
      "date": 1634814593689,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "doctorsCoat" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "BunnyEars" },
        { "trait_type": "Standard Hand Right", "value": "pistol" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "ChokerPearl" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "f44ac5db7c93e70f69cae264b10099891653aba9",
      "name": "#97",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmT21GR2xt1zTBDpdTkjiKe3jxS1b45eppK6tazjPA8y8R",
      "edition": 97,
      "date": 1634814594470,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 1" },
        { "trait_type": "Outfits All", "value": "santa costume" },
        { "trait_type": "Eye Access", "value": "RetroShades" },
        { "trait_type": "HG with ear & eye access", "value": "crown" },
        { "trait_type": "Standard Hand Right", "value": "gunA" },
        { "trait_type": "Ear Access", "value": "BasicEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "1602b0c0b43ec5fde27f253c81a134beed1ebc8b",
      "name": "#98",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmTUGsMYdm8xnw8KAcHtZApmwZTYaCsXFjdpW7B2jjvZ8s",
      "edition": 98,
      "date": 1634814595269,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 6" },
        { "trait_type": "Outfits All", "value": "Spacesuit2" },
        { "trait_type": "Eye Access", "value": "MetalRoundGlasses" },
        { "trait_type": "HG with ear & eye access", "value": "santa cap" },
        { "trait_type": "Standard Hand Right", "value": "ugi gun" },
        { "trait_type": "Ear Access", "value": "JhoomkhaEarring" },
        { "trait_type": "Neck Access", "value": "btc chain" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "dc3c0d661cc257616f978148f0f7d8023e693c8e",
      "name": "#99",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmawNja54E1Apu1y926EVUvy1c5y6J88g1SL17ip6HmFf9",
      "edition": 99,
      "date": 1634814596352,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 3" },
        { "trait_type": "Outfits All", "value": "hsshirtb" },
        { "trait_type": "Eye Access", "value": "Monocle" },
        { "trait_type": "HG with ear & eye access", "value": "VikingHelmet" },
        { "trait_type": "Standard Hand Right", "value": "pistol" },
        { "trait_type": "Ear Access", "value": "HandingEarring" },
        { "trait_type": "Neck Access", "value": "stethoscope" }
      ],
      "compiler": "HashLips Art Engine"
    },
    {
      "dna": "98823cc69a197353038579f1e31e23a91aeaec46",
      "name": "#100",
      "description": "NF Badgers Fur test",
      "image": "https://gateway.pinata.cloud/ipfs/QmUGVZTGkJHJC4rREE5FCZmpVKe9UiviUoMRnGAWGzKJWq",
      "edition": 100,
      "date": 1634814597266,
      "attributes": [
        { "trait_type": "Base normal", "value": "base Nakade2" },
        { "trait_type": "Fur", "value": "fur 2" },
        { "trait_type": "Outfits All", "value": "ShirtPaattern1" },
        { "trait_type": "Eye Access", "value": "glassesA" },
        { "trait_type": "HG with ear & eye access", "value": "BowlerHat" },
        { "trait_type": "Standard Hand Right", "value": "ugi gun" },
        { "trait_type": "Ear Access", "value": "JewelEarring" },
        { "trait_type": "Neck Access", "value": "eth chain" }
      ],
      "compiler": "HashLips Art Engine"
    }
  ] 

module.exports = async(req,res) => {  

    let id = req.query.id
    let contract = await new web3.eth.Contract(SmartContractAbi , SmartContractAddress)   
    let unreveal = await contract.methods.unreveal().call()  
    let totalSupply = await contract.methods.totalSupply().call() 

    
    if(!unreveal){  

     

          res.status(401).send(
            {
                
                "name": `#${id}`,
                "description": "This is pre-reveal data. Stay tuned for your unique NFHB dna",
                "image":"https://ipfs.io/ipfs/QmSGnXfbhiKUET5MNkYTNiS8ouiFN2NQ53xDTM19HzTF4W"

              }
        )


    } else{


        if(!Number.isInteger(Number(id)) || Number(id) <= 0 || Number(id) > 10000 ){
            res.send(
                {
                    "error" : "Invalid tokenId"    
                }
            )
        }else if(parseInt(id) <= parseInt(totalSupply) ){
            res.status(200).send(
                metadata[id-1]
                )   
        }else{
    
            res.status(401).send(
                {
                    
                  "error" : "Token Does Not Exist" 
        
                  }
            )
        }
    }





}

