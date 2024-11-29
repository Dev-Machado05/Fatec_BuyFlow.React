import "../Styles/NwProduct.css";
import Header from "../components/Header2";

export default function NwProduct() {
    return (
        <div className="NwContainer">
            < Header />

            <div className="NwContent">
                {/* <div className="ContentInput"><label>Nome:</label><input type="text"></input></div>
                <div className="ContentInput"><label>Descrição</label><input type="text"></input></div>
                <div className="ContentInput"><label>Cor</label><input type="text"></input></div>
                <div className="ContentInput"><label>Imagem (URL)</label><input type="url"></input></div>
                <div className="ContentInput"><label>Preço</label><input type="number"></input></div>
                <div className="ContentInput"><label>Desconto</label><input type="checkbox" name="" id="" /></div>
                <div className="ContentInput"><label>Valor Desconto (%)</label><input type="number"></input></div> */}

                <section>
                <table>
                    <tr>
                        <td><label>Nome:</label></td><td className="NwInputContainer"><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td><label>Descrição:</label></td><td className="NwInputContainer"><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td><label>Cor:</label></td><td className="NwInputContainer"><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td><label>Imagem (URL):</label></td><td className="NwInputContainer"><input type="url"></input></td>
                    </tr>
                    <tr>    
                        <td><label>Preço:</label></td><td className="NwInputContainer"><input type="number"></input></td>
                    </tr>
                    <tr>
                        <td className="Checkbox"><label>Desconto:</label><input type="checkbox" name="" id="" /></td>
                    </tr>
                    <tr>
                        <td><label>Valor Desconto (%):</label></td><td className="NwInputContainer"><input type="number"></input></td>
                    </tr>
                </table>
                    <button className="submit">Enviar</button>
                </section>

            </div>
        </div>
    );
}