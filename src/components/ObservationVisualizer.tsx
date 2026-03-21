
import { useEffect, useRef } from "react";



export const ObservationVisualizer : React.FunctionComponent<{ observation: Uint8Array }> = ({ observation }) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const IMG_SIZE=Math.sqrt(observation.length)
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {    
      const context = canvas.getContext('2d')
      const imgData = context!.createImageData(IMG_SIZE, IMG_SIZE);
     
      for (let i=0, dst_index=0; i<IMG_SIZE*IMG_SIZE; i++,  dst_index +=4) {
        for (let k=0; k<3; k++)
          imgData.data[dst_index+k] = observation[i];
        imgData.data[dst_index+3] = 255
      }
      context!.putImageData(imgData, 0, 0);

    }
  }, [observation, IMG_SIZE])

  return <div> <canvas ref={canvasRef} width={IMG_SIZE} height={IMG_SIZE}  /> </div>
}
