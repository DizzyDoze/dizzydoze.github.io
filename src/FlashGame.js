const FlashGame = () => {
    return (
        <section className="relative w-full">
            <div className="relative w-full h-96 md:h-[500px] bg-black overflow-hidden">
                <iframe
                    src="/flash_game/index.html"
                    frameBorder="0"
                    scrolling="no"
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    title="Corona Runner Game"
                ></iframe>
            </div>
        </section>
    );
};

export default FlashGame;
