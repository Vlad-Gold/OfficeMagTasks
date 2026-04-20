import Button from './components/Button';
import './components/Button.css';
import editIcon from './assets/edit.svg';
import loadIcon from './assets/load.svg';
import deleteIcon from './assets/delete.svg';
import printIcon from './assets/print.svg';
import uploadIcon from './assets/upload.svg';

function App() {
  return (
    <div style={{ margin: '40px' }}>
      
      <div className="buttonGrid">
        <div className="buttonCol">
          <Button>Просмотреть</Button>
          <Button state="hover">Просмотреть</Button>
          <Button state="active">Просмотреть</Button>
          <Button disabled>Просмотреть</Button>
        </div>

        <div className="buttonCol">
          <Button type="dangerBorder">Просмотреть</Button>
          <Button type="dangerBorder" state="hover">Просмотреть</Button>
          <Button type="dangerBorder" state="active">Просмотреть</Button>
          <Button type="dangerBorder" disabled>Просмотреть</Button>
        </div>

        <div className="buttonCol">
          <Button type="dangerBg">Просмотреть</Button>
          <Button type="dangerBg" state="hover">Просмотреть</Button>
          <Button type="dangerBg" state="active">Просмотреть</Button>
          <Button type="dangerBg" disabled>Просмотреть</Button>
        </div>

        <div className="buttonCol">
          <Button type="arrow">Просмотреть</Button>
          <Button type="arrow" state="hover">Просмотреть</Button>
          <Button type="arrow" state="active">Просмотреть</Button>
          <Button type="arrow" disabled>Просмотреть</Button>
        </div>

        <div className="buttonCol">
          <Button type="successBg">Просмотреть</Button>
          <Button type="successBg" state="hover">Просмотреть</Button>
          <Button type="successBg" state="active">Просмотреть</Button>
          <Button type="successBg" disabled>Просмотреть</Button>
        </div>

        <div className="buttonCol">
          <Button type="successBorder">Просмотреть</Button>
          <Button type="successBorder" state="hover">Просмотреть</Button>
          <Button type="successBorder" state="active">Просмотреть</Button>
          <Button type="successBorder" disabled>Просмотреть</Button>
        </div>
      </div>

      <div className="buttonRow">
        <Button icon={editIcon}>Редактировать</Button>
        <Button icon={loadIcon}>Выгрузить в Excel</Button>
        <Button icon={deleteIcon}>Удалить список</Button>
        <Button icon={printIcon}>Распечатать</Button>
        <Button icon={uploadIcon}>Загрузить из файла</Button>
      </div>
    </div>
  );
}

export default App;
