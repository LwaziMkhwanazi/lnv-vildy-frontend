import React,{useEffect} from 'react'
import {Doughnut} from "react-chartjs-2"
import {useDispatch,useSelector} from "react-redux"
import {fetchActionCount} from "../../redux/dashboard/actionCountAync"
import {fetchComedyCount} from "../../redux/dashboard/comedyCountAnyc"
import {fetchKarateCount} from "../../redux/dashboard/karateCountAync"
import {fetchRomanticCount} from "../../redux/dashboard/romanticCountAync"
import {fetchSeriesCount} from "../../redux/dashboard/seriesCountAync"
import CircularProgress from '@material-ui/core/CircularProgress';
function DonutChart() {  
    
    const dispatch = useDispatch()
    const action = useSelector(state => state.actionCount)
    const comedy = useSelector(state =>state.comedyCount)
    const karate = useSelector(state => state.karateCount)
    const romantic = useSelector(state => state.romanticCount)
    const series = useSelector(state => state.seriesCount)

    const actionResults = action && action.actionCount
    const comedyResults = comedy && comedy.comedyCount
    const karatResults = karate && karate.karateCount
    const romanticResults = romantic && romantic.romanticCount 
    const seriesResults = series && series.seriesCount
 
    
    useEffect(()=>{
        dispatch(fetchActionCount())
        dispatch(fetchComedyCount())
        dispatch(fetchKarateCount())
        dispatch(fetchRomanticCount())
        dispatch(fetchSeriesCount())
    },[dispatch])

    if(actionResults === undefined) return <CircularProgress/>
    if(comedyResults === undefined) return <CircularProgress/>
    if (karatResults === undefined) return <CircularProgress/>
    if(romanticResults === undefined) return <CircularProgress/>
    if(seriesResults === undefined) return <CircularProgress/>
    
  
    const data = {
    labels:['Action','Comedy','Romantic','Series','Karate'],
    datasets:[
        {
            label:'Rentals for 2021',
            data: [actionResults.rentals,comedyResults.rentals,romanticResults.rentals,seriesResults.rentals,karatResults.rentals],
            backgroundColor:[
                'rgb(68, 138, 255)',
                'rgb(170, 0, 255)',
                'rgb(255, 64, 129)',
                'rgb(255, 235, 59)',
                'rgb(76, 175, 80)'
        
        ],
            pointBackgroundColor:['rgb(255, 64, 129)'],
            pointBorderColor:['rgb(255, 64, 129)']
        }

    ]
}

    return (
        <div>
        <Doughnut data = {data}/>
        </div>
    )
}

export default DonutChart
