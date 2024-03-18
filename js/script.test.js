describe("coverImage", () => {
  it("should return an image tag with the thumbnail source if imageLinks is provided", () => {
    const volumeInfo = {
      imageLinks: {
        thumbnail: "https://example.com/thumbnail.jpg",
      },
    };

    const expected = `<img src="https://example.com/thumbnail.jpg" alt="Cover Image" />`;
    const result = coverImage(volumeInfo);

    expect(result).toEqual(expected);
  });

  it("should return 'N/A' if imageLinks is not provided", () => {
    const volumeInfo = {};

    const expected = "N/A";
    const result = coverImage(volumeInfo);

    expect(result).toEqual(expected);
  });
});
