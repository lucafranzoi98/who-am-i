import useStore from "../useStore";
import Button from "../utils/Button";

export default function Result() {
   const restart = useStore((state) => state.restart)

   return <>
      <Button handleClick={restart}>
         Restart
      </Button>
   </>
}