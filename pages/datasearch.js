import { useEffect, useState } from "react"
import styled from "styled-components"
import COLORS from "../data/colors";
import Searchbar from "../components/datasearch/Searchbar";
import SearchResults from "../components/datasearch/SearchResults";
import { fetchAllFishNames, fetchOceansData } from "../utils/supabaseFunctions";
const Cont = styled.div`
    margin-top: 80px;
    
`;

export async function getStaticProps () {
    const fishFetch = await fetchAllFishNames();
    const oceansFetch = await fetchOceansData();
    return {
        props: {
            fishFetch,
            oceansFetch
        }
    }
};

const Datasearch = ({fishFetch, oceansFetch}) => {
    const [baseFish, setBaseFish] = useState(fishFetch.map(fish=>fish.name))
    const [fish, setFish] = useState(fishFetch.map(fish=>fish.name));
    const [baseOceans, setBaseOceans] = useState([]);
    const [oceans, setOceans] = useState([]);
    
    useEffect(()=> {
        let oceanObjects = [];
        let oceanObj = {};
        let fish = [];
        for(let i =0; i<oceansFetch.length; i++) {
            fish = [];
            oceanObj = {name: oceansFetch[i].name};
            oceansFetch[i].oceanFish.forEach(oceanFish=> {
                if(!fish.includes(oceanFish.fish_id.name)){
                    fish.push(oceanFish.fish_id.name)
                }
            })
            oceanObj.fish = fish;
            oceanObjects.push(oceanObj);
        }
        setBaseOceans(oceanObjects);
        setOceans(oceanObjects);
    },[])
    const [text, setText] = useState('');
    
    //console.log(baseOceans)
    const updateFish = (val) => {
        if(val == ''){
            setFish(baseFish);
        } else{
            setFish(baseFish.filter(fish=>fish.toLowerCase().includes(val.toLowerCase())));
        }
    }

    const updateOceans = (val) => {
        setOceans(oceans=> {
            let oceanFishFiltered = baseOceans.map(ocean=> {
                let innerOcean = ocean.fish.filter(fish=>fish.toLowerCase().includes(val.toLowerCase()))
                return {name: ocean.name, fish:innerOcean};
            })
            let filteredOceans = oceanFishFiltered.filter(ocean=> {
                if(ocean.fish.length > 0){
                    return true;
                } else if (ocean.name.toLowerCase().includes(val.toLowerCase())) {
                    return true;
                }

            })
            return filteredOceans;
        })
    }
    console.log(oceans);
    const updateText = (e) => {
    const val = e.target.value;
    console.log(val);
    setText(val);
    updateFish(val);
    updateOceans(val);
    }
  return (
    <Cont colors = {COLORS}>
        <Searchbar text = {text} updateText = {updateText} />
        <div className="ssm-spacer-bot-res"></div>
        <SearchResults fish = {fish} oceans = {oceans} />
    </Cont>
  )
}

export default Datasearch