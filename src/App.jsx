import React from 'react';
import s from './App.module.scss'

const App = () => {
    return (

            <div className={s.dialog_container}>
                <div className={s.dialog}>

                    <div className={s.dialog__header}>

                        <div className={s.dialog__header_title_container}>
                            <div className={s.dialog__header_title}>
                                Ссъешь ещё этих мягких французских булок, да выпей чаю
                            </div>
                            <div className={s.dialog__header_subtitle}>
                                Съешь ещё этих мягких французских булок, да выпей чаю
                            </div>
                        </div>
                        <button className={s.dialog__header_button}>
                            Кнопка закрытия
                        </button>
                    </div>

                    <div className={s.dialog__content}>
                        <div className={s.dialog__content_block_dialog__content_block_left}>
                            Left
                        </div>
                        <div className={s.dialog__content_block_dialog__content_block_right}>
                            <div className={s.content}>
                                <span>Top</span>
                                <span>Center</span>
                                <span>Bottom</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.dialog__footer}>

                              Ссъешь ещё этих мягких французских булок, да выпей чаю<br/>

                            ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<br/>

                            Ссъешь ещё этих мягких французских булок, да выпей чаю

                    </div>
                </div>
            </div>

    );
};

export default App;