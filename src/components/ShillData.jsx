import { useEffect, useState } from "react";
import classes from './ShillData.module.css';
import { ExternalLinkIcon } from '@heroicons/react/outline';

const ShillData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('./db.json')
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true)
        setData(data)
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      }
      )
  }, [])

  return (
    <div>
      {!isLoaded ? (
        <div>loading...</div>
      ) : (
        <div className={classes.container}>

          {data.map((shills) => {
            return (
              <div key={shills.id} className={classes.wrapper}>
                <div><span>{shills.id}.&nbsp;</span>{shills.name}</div>
                <div>{shills.occupation}</div>
                <a href={shills.shill_proof} target='_blank' rel='noopener' >shilling/scamming proof <ExternalLinkIcon style={{ height: '18px', width: '18px' }} /></a>
              </div>
            )
          })}
        </div>
      )}
      {error && <p>error</p>}
    </div>
  )
}

export default ShillData;