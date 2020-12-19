import cn from 'classnames';
import UserDefaultAvatar from './icons/icon-usermenu';
import styles from './user-menu.module.css';

type Props = {
    username?: string;
    signIn?: boolean;
    signOut?: boolean;
};

export default function UserMenuProfile({ name, username, size = 1, signIn, signOut }: Props) {
    return (
        <div className={styles.profile}>
            <span
              className={cn(styles.skeleton, styles.wrapper, styles.inline, styles.rounded)}
            >
            {username ? (
                <img src={`https://github.com/${username}.png`}
                     alt={username} className={styles.image} />
            ) : (
                <span >
                <UserDefaultAvatar color={'var(--secondary-color'} height={60}/>
              </span>
            )}
            </span>
            <div className={styles.text}
                 onClick={() => { !username ? signIn() : signOut() }}
            >
                <p
                    className={cn(styles.name, {
                        [styles['name-blank']]: !username
                    })}
                >
                    <span
                        className={cn(styles.skeleton, styles.wrapper)}
                    >
                        {name || username || 'REGISTER'}
                    </span>
                </p>
                <p className={styles.username}>
                    <span
                        className={cn(styles.skeleton, styles.wrapper)}
                    >
                        <span className={styles.githubIcon}>
                            {username ? 'Log Out' : 'Log In' }
                        </span>
                    </span>
                </p>
            </div>
        </div>
    );
}
