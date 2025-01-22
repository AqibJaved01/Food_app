import Styles from './loading.module.css'

export default function MealsLoadingPage () {
    return (
        <p className={Styles.loading}>
            Fetching meals...
        </p>
    )

}