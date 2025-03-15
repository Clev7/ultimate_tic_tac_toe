import { Board } from "@/components/Board";

export default function Home() {
  return (
    <div id="home">
      <table id="ultimateBoard">
        <tr>
          <td className="board"><Board /></td>
          <td className="board"><Board /></td>
          <td className="board"><Board /></td>
        </tr>
        <tr>
          <td className="board"><Board /></td>
          <td className="board"><Board /></td>
          <td className="board"><Board /></td>
        </tr>
        <tr>
          <td className="board"><Board /></td>
          <td className="board"><Board /></td>
          <td className="board"><Board /></td>
        </tr>
      </table>
    </div>
  );
}
