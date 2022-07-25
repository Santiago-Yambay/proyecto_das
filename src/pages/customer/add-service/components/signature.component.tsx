import SignatureCanvas from 'react-signature-canvas';

import './signature.component.css';

export const Signature = (props: any) => {
  let canvas:any;

  const onEndEditing = (a:any ) => {
    props.onSigned(!canvas.isEmpty());
  }

  return (
    <div>
      <h1>Add your signature</h1>
      <SignatureCanvas
        ref={(ref) => { canvas = ref }}
        minWidth={0.1}
        maxWidth={1.5}
        dotSize={0.5}
        canvasProps={{width: 250, height: 100, className: 'amd__signature'}}
        onEnd={onEndEditing}
         />
    </div>
  );
}
