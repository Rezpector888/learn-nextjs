export default function Footer() {
    const currentDate = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>&copy; {currentDate} All Rigth Reserved</p>
        </footer>
    );
}